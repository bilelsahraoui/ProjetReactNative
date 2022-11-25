import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import DefaultLayout from '../../layouts/default';

const Info = () => {
  return (
    <DefaultLayout>
      <View>
        <Link to="/">
          <Text>INFO</Text>
        </Link>
      </View>
    </DefaultLayout>
  );
};

export default Info;
