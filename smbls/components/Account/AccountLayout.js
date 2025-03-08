import { MainHeader } from "../Shared/Header/Header";
import { ModalAddress } from "./ModalAddress";
import { ModalNameChange } from "./ModalNameChange";

export const AccountLayout = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    // order: '1',
    '@light': {
      background: '#E4E2E2',
    },
    '@dark': {
      background: '#1E201E',
    }
  },
  ProfileWrap: {
    extend: 'Flex',
    props: {
      width: '100%',
      // height: 'calc(100dvh - 77px)',
      height: '80%',
      flow: 'y',
      gap: '20px',
      justifyContent:'center',
      '@light': {
        background: '#E4E2E2',
      },
      '@dark': {
        background: '#1E201E',
      }
    },
    Profile:{

    },
    AddAddress: {
  
    },
    ModalNameChange: {},
    ModalAddress: {}
  }
}
