import React from 'react';
import { View, Modal, ActivityIndicator} from 'react-native';
import Styles from './Themes/Style';

const Loader = (props) => {
  const {loading, ...attributes} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={Styles.modalBackground}>
        <View style={Styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color="#000000"
            size="large"
            style={Styles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
