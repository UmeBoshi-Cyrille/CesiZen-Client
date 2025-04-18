export const baseEnv = {
  production: false,
  apiUrl: 'https://localhost:5001/api',
  query: 'query',
  command: 'command',
  articles: 'articles',
  exercises: 'breath-exercises',
  categories: 'categories',
  authentication: 'authentication',
  registration: 'registration',
  users: 'users',
}

export const environment = {
  deleteCookieUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/delete-cookie`,
  forgetPasswordUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/forgot-password`,
  forgetPasswordresponseUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}forgot-password-response`,
  loginUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/authenticate`,
  logoutUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/logout`,
  resetPasswordUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/reset-password`,
  refreshAccessTokenUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/refresh-access-token`,
  verifyEmailUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/verify`,
  resendEmailVerificationUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/resend-verify-email`,

  registrationUrl: `${baseEnv.apiUrl}/${baseEnv.registration}/register`,

  articleSearchUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/search`,
  articleGetAllUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/get`,
  articleGetLastUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/get-last`,
  articleGetByCategoryUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/get-by-category`,
  articleCreateUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.command}/create`,
  articleQueryUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}`,
  articleCommandUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.command}`,

  categoryGetAllUrl: `${baseEnv.apiUrl}/${baseEnv.categories}/${baseEnv.query}/get`,
  categoryCreateUrl: `${baseEnv.apiUrl}/${baseEnv.categories}/${baseEnv.command}/create`,
  categorysQueryUrl: `${baseEnv.apiUrl}/${baseEnv.categories}/${baseEnv.query}`,
  categoryCommandUrl: `${baseEnv.apiUrl}/${baseEnv.categories}/${baseEnv.command}`,

  exerciseGetAllUrl: `${baseEnv.apiUrl}/${baseEnv.exercises}/${baseEnv.query}/get`,
  exerciseCreateUrl: `${baseEnv.apiUrl}/${baseEnv.exercises}/${baseEnv.command}/create`,
  exercisesQueryUrl: `${baseEnv.apiUrl}/${baseEnv.exercises}/${baseEnv.query}`,
  exerciseCommandUrl: `${baseEnv.apiUrl}/${baseEnv.exercises}/${baseEnv.command}`,

  userSearchUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/search`,
  userGetAllUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/get`,
  userGetbyUsernameUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/user`,
  userGetProfileUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/profile`,
  userGetMinimumProfileUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/minimum-profile`,
  userCreateUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.command}/create`,
  accountActivationUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.command}/account-activation`,
  userQueryUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}`,
  userCommandUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.command}`,
 }
