import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import DefaultLayout from '../../layouts/default';

const Mount = () => {
  return (
    <DefaultLayout>
      <View>
        <Link to="/">
          <Text>Je suis la page mount</Text>
        </Link>
      </View>
    </DefaultLayout>
  );
};

export default Mount;
