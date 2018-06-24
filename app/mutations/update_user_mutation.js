import { commitMutation, graphql } from 'react-relay';
import uuidv4 from "uuid/v4";

const commit = (
  environment,
  id,
  email = null,
  username = null,
  gender = null,
  birthday = null,
  handler = null,
) => {
  const mutation = graphql`
    mutation updateUserMutation($input: UpdateUserInput!) {
      updateUser(input: $input) {
        user {
          id
          email
          username
          gender
          birthday
        }
      }
    }
  `;

  const variables = {
    input: {
      email,
      username,
      gender,
      birthday,
    },
  };

  optimisticUpdater = (store) => {
    const field = store
    .getRoot()
    .getLinkedRecord('viewer');

    const getName = store
      .getRoot()
      .getLinkedRecord('viewer')
      .getValue('username');
      console.log(getName);

      field.setValue('chicken', 'username')
    

  }
  const optimisticResponse = {
    updateUser: {
      user: {
        id: id,
        email: 'loading...',
        username: 'loading...',
        gender: 'loading...',
        birthday: 'loading...'
      }
    }
  };

  const updater = store => {

  };

  commitMutation(environment, {
    mutation,
    optimisticResponse,
    variables,
    
    // optimisticUpdater,
    onCompleted: (response) => {
      if (handler !== null) {
        handler(response.updateUser.user.username);
      }
    },
    onError: err => console.error(err),
  });
};

export default { commit };
