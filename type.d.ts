interface CreateuserParams {
  name: string;
  email: string;
  password: string;
}
interface signInParams {
  email: string;
  password: string;
}

interface TabBarIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}
