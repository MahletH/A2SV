import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Icon,
  Input,
  StyleService,
  Select,
  SelectItem,
  IndexPath,
  Spinner,
  TopNavigation,
  TopNavigationAction,
  Layout,
  Modal,
  Card,
  Text,
} from "@ui-kitten/components";
import { SafeAreaView, View, TouchableWithoutFeedback } from "react-native";
import { LangContext } from "../../../assets/lang/language-context";
import AsyncStorage from "@react-native-community/async-storage";
import { ProfileAvatar } from "./extra/profile-avatar.component";
import userIDStore from "../../data-management/user-id-data/userIDStore";
import * as actions from "../../data-management/user-id-data/userIDActions";
import { KeyboardAvoidingView } from "../../components/3rd-party";
import { strings } from "../../localization/localization";

const ArrowIosBackIcon = (style) => <Icon {...style} name="arrow-ios-back" />;
const data = [
  strings.UpdateYourAgeGroup,
  "0-10",
  "11-20",
  "21-30",
  "31-40",
  "41-50",
  "51-60",
  "61-70",
  "71-80",
  "81-90",
  ">90",
];

const genderData = [strings.UpdateYourGender, strings.Male, strings.Female];

const EditProfileScreen = (props) => {
  const langContext = React.useContext(LangContext);
  const [username, setUsername] = React.useState("");
  const [usernameCap, setUsernameCap] = React.useState("");
  const [usernameStatus, setUsernameStatus] = React.useState("basic");
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedAgeIndex, setSelectedAgeIndex] = React.useState(
    new IndexPath(0)
  );
  const [selectedGenderIndex, setSelectedGenderIndex] = React.useState(
    new IndexPath(0)
  );

  const getMyUsername = async () => {
    try {
      let userName = await AsyncStorage.getItem("userName");
      setUsername(userName);
    } catch (error) {}
  };

  useEffect(() => {
    getMyUsername();
  }, []);

  const displayAgeValue = data[selectedAgeIndex.row];
  const [modalState, setModalState] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [modalStatus, setModalStatus] = React.useState("");
  //setting up the languages
  const lang = langContext.lang;
  strings.setLanguage(lang);

  const renderOption = (title, index) => (
    <SelectItem title={title} key={index} />
  );

  const displayGenderValue = genderData[selectedGenderIndex.row];
  const renderGenderOption = (title, index) => (
    <SelectItem title={title} key={index} />
  );

  const onUserNameChange = (name) => {
    if (name !== "") {
      setUsernameStatus("basic");
      setUsernameCap("");
    } else {
      setUsernameStatus("danger");
      setUsernameCap(strings.Required);
    }
    setUsername(name);
  };

  const renderBackAction = () => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={props.navigation.goBack}
    />
  );

  const onGenderChange = (pass) => {
    if (pass === 0) {
      setModalMessage(strings.PleaseSelectGender);
      setModalState(true);
      setModalStatus("danger");
      return;
    }
    setSelectedGenderIndex(pass);
  };

  const onAgeGroupChange = (pass) => {
    if (pass === 0) {
      setModalMessage(strings.PleaseSelectAgeGroup);
      setModalState(true);
      setModalStatus("danger");
      return;
    }

    setSelectedAgeIndex(pass);
  };

  const renderPassIcon = (props) => (
    <TouchableWithoutFeedback
      onPress={() => setCurrPasswordVisible(!currPasswordVisible)}
    >
      <Icon {...props} name={currPasswordVisible ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const renderNewPassIcon = (props) => (
    <TouchableWithoutFeedback
      onPress={() => setNewPasswordVisible(!newPasswordVisible)}
    >
      <Icon {...props} name={newPasswordVisible ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const CameraIcon = (style) => <Icon {...style} name="camera" />;

  const renderPhotoButton = () => (
    <Button
      style={styles.editAvatarButton}
      status="basic"
      accessoryLeft={CameraIcon}
    />
  );
  //change profile
  const updateProfile = () => {
    onUserNameChange(username);
    onAgeGroupChange(selectedAgeIndex);
    onGenderChange(selectedGenderIndex);
    if (selectedAgeIndex > 0 && selectedGenderIndex > 0 && username !== "") {
      setIsLoading(true);
      fetch("https://sym-track.herokuapp.com/api/users", {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + userIDStore.getState().userToken,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: userIDStore.getState().userId,
          username: username,
          age_group: data[selectedAgeIndex],
          gender: genderData[selectedGenderIndex],
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          setModalMessage(strings.YouHaveSuccessfullyChangedYourProfile);
          setModalState(true);
          setIsLoading(false);
          setModalStatus("success");
          saveUser(
            username,
            data[selectedAgeIndex],
            genderData[selectedGenderIndex]
          );
          userIDStore.dispatch(
            actions.addUser(
              userIDStore.getState().userId,
              username,
              userIDStore.getState().userToken,
              data[selectedAgeIndex],
              genderData[selectedGenderIndex]
            )
          );
        })
        .catch((error) => {
          console.log(error);
          setModalMessage(strings.CantConnectDueToConnection);
          setModalState(true);
          setModalStatus("danger");
        });
    }
  };
  const saveUser = async (userName, age_group, gender) => {
    try {
      await AsyncStorage.setItem("userName", userName); //save user name on async storage
      await AsyncStorage.setItem("age_group", age_group); //save age group on async storage
      await AsyncStorage.setItem("gender", gender); //save gender on async storage
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        visible={modalState}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setModalState(false)}
      >
        <Card disabled={true} style={{ marginLeft: 10, marginRight: 10 }}>
          <Text status={modalStatus} category="h6" style={{ marginBottom: 10 }}>
            {modalMessage}
          </Text>
          <Text
            style={{ alignSelf: "flex-end", color: "#0080ff" }}
            onPress={() => {
              setModalState(false);
              setUsername("");
              setSelectedAgeIndex("");
              setSelectedGenderIndex("");
              setIsLoading(false);
            }}
          >
            {strings.Dismiss}
          </Text>
        </Card>
      </Modal>
      <TopNavigation
        alignment="center"
        title={strings.ChangeProfile}
        accessoryLeft={renderBackAction}
      />
      <Divider />
      <Layout style={{ flex: 1 }}>
        <KeyboardAvoidingView>
          <Layout level="2" style={{ padding: 10 }}>
            <ProfileAvatar
              style={styles.profileAvatar}
              source={require("../../../assets/man.png")}
            />
          </Layout>
          <View style={styles.formContainer}>
            <Input
              placeholder={userIDStore.getState().userName}
              label={strings.Username}
              disabled={true}
              caption={usernameCap}
              status={usernameStatus}
              autoCapitalize="words"
              value={username}
              onChangeText={(name) => onUserNameChange(name)}
            />
            <Select
              style={styles.select}
              label={strings.AgeGroup}
              style={styles.formInput}
              placeholder="Default"
              value={displayAgeValue}
              selectedIndex={selectedAgeIndex}
              onSelect={(index) => setSelectedAgeIndex(index)}
            >
              {data.map((index, title) => renderOption(index, title))}
            </Select>
            <Select
              style={styles.select}
              label={strings.Gender}
              style={styles.formInput}
              placeholder="Default"
              value={displayGenderValue}
              selectedIndex={selectedGenderIndex}
              onSelect={(index) => setSelectedGenderIndex(index)}
            >
              {genderData.map((index, title) =>
                renderGenderOption(index, title)
              )}
            </Select>
          </View>
          <Button
            style={styles.doneButton}
            size="large"
            disabled={isLoading}
            accessoryLeft={() => (isLoading ? <Spinner /> : <></>)}
            onPress={() => updateProfile()}
          >
            {strings.Done}
          </Button>
        </KeyboardAvoidingView>
      </Layout>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleService.create({
  formContainer: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  editAvatarButton: {
    aspectRatio: 1.0,
    height: 48,
    borderRadius: 24,
  },
  doneButton: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  divider: {
    flex: 1,
  },
  profileAvatar: {
    aspectRatio: 1.0,
    height: 124,
    alignSelf: "center",
  },
  formInput: {
    marginTop: 16,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
