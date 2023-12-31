import { g, config, auth } from '@grafbase/sdk';

// @ts-ignore
const User = g.model('User', {
  name: g.string().length({min: 6, max: 30}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  facebookUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  posts: g.relation(() => Post).list().optional(),
}).auth((rules) => {
  rules.public().read()
})

// @ts-ignore
const Post = g.model('Post', {
  title: g.string().length({min: 6}),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
}).auth((rules) => {
  rules.public().read()
  rules.private().create().delete().update()
})

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: g.env('NEXTAUTH_SECRET'),
})
export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  }
})
