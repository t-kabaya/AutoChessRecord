import Toast from 'react-native-root-toast'
import { primaryColor } from '../../../constants/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import I18n from '../../../constants/I18n'

export const showSaveSuccessToast = () => {
  Toast.show(I18n.t('saveSuccessToastText'), {
    backgroundColor: '#6200EE',
    duration: 1500,
    opacity: 1,
    position: hp('45%'),
    shadow: false,
    animation: false,
    hideOnPress: true,
    delay: 0
  })
}

export const showInvalidRankToast = () => {
  Toast.show(I18n.t('invalidRankingToastText'), {
    backgroundColor: '#03DAC5',
    duration: 2000,
    opacity: 1,
    position: hp('45%'),
    shadow: false,
    animation: false,
    hideOnPress: true,
    delay: 0
  })
}
