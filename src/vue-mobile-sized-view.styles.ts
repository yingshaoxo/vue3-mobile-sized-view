import styled from 'vue3-styled-components';

const LayoutProps = {
  backgroundColor: String,
}

export const Layout = styled('main', LayoutProps)`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${(props: any) => props.backgroundColor ? props.backgroundColor : '#f3f3f3'};
`;

export const ScreenWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const ScreenProps = {
  screenBackgroundColor: String || undefined,
  screenLightShadow: String || undefined,
  screenDarkShadow: String || undefined,
  isRounded: Boolean || undefined,
};

export const Screen = styled('div', ScreenProps)`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 1100px) {
    margin-right: 25px;
  }
  @media screen and (max-width: 900px) {
    margin-right: 0;
  }
  @media screen and (max-width: 600px) {
    margin-right: 0;
    max-width: 100%;
    height: 100vh;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  background-color: ${(props: any) => props.screenBackgroundColor ? props.screenBackgroundColor : '#fefefe'};
  box-shadow: ${(props: any) => props.screenLightShadow ? props.screenLightShadow : '-31px -31px 62px #d9d9d9'}, ${props => props.screenDarkShadow ? props.screenDarkShadow : '-31px -31px 62px #ffffff'};
  height: ${(props: any) => props.isRounded ? 'calc(100vh - 45px)' : '100vh'};
  border-top-left-radius: ${(props: any) => props.isRounded ? '25px' : 0};
  border-top-right-radius: ${(props: any) => props.isRounded ? '25px' : 0};
`;
