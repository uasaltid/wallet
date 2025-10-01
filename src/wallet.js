import builder from './builder.js'

const wallet = builder('wallet')

wallet.get('/ping', async ctx => {
  await ctx.res.json({
    status: 'success'
  })
})
