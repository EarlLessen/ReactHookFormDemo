import * as React from 'react';
import {styles} from './styles';
import {Text, View, TextInput, Button, SafeAreaView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

//Demo
type DemoProps = {};
const Demo: React.FC<DemoProps> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      userName: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>React Hook Form</Text>
      </View>
      <View style={styles.form}>
        {errors.userName && <Text>This is required.</Text>}
        <Text style={styles.textLabel}>username</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="userName"
        />
        <Text style={styles.textLabel}>email</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};
export default Demo;
