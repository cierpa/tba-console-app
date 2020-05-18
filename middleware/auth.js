import { Auth } from 'aws-amplify'

export default async ({ redirect }) => {
  // const userInfo = await Auth.currentUserInfo()

  // if (!userInfo) {
  //   redirect('/signin')
  // }
  let signedIn = false
  await Auth.currentUserInfo()
    .then((data) => (signedIn = Boolean(data)))
    .then(() => signedIn || redirect('/signin'))
}
