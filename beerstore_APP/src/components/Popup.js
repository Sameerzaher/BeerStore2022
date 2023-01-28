import React, { useState } from "react";
import { Modal, Pressable, View, Platform } from "react-native";
const [modalVisible, setModalVisible] = useState(false);
const Popup = (props) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}
      >
        <Pressable style={[Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop, styles.backdrop]} onPress={() => props.setModalVisible(false)} />
        <View>

        </View>
      </Modal>
  )
}