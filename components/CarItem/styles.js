import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: '40',
    fontWeight: 500,
  },
  subtitle: {
    fontSize: '16',
    color: '#5c5e62'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeModel: 'cover',
  }
});

export default styles;