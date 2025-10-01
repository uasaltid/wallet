import builder from './builder.js'

const wallet = builder('wallet')

wallet.post('/ping', async ctx => {
  await ctx.res.json({
    status: 'success'
  })
})
