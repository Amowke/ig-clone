import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { firebase } from '../../firebase'

const handleSignout = async () => {
  try {
    await firebase.auth().signOut()
    console.log('Signed out successfully')
  } catch (error) {
    console.log(error)
  }
}

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ handleSignout}>
        <Image
          style={styles.logo}
          source={require('../../assets/header-logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            source={require('../../assets/plus-icon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/like-icon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>1</Text>
          </View>
          <Image
            source={require('../../assets/facebook-messenger-icon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    top: 15,
  },

  iconsContainer: {
    flexDirection: 'row',
    marginTop: 17,
  },

  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 17,
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },

  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },

  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
})

export default Header
