import { Hono } from "hono";

export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();


blogRouter.post('/', (c) => {

	return c.text('Hi Hono')
})

blogRouter.put('/', (c) => {
	return c.text('Hi Hono')
})

blogRouter.get('/', (c) => {
	return c.text('Hi Hono')
})

blogRouter.get('/bulk', (c) => {
	return c.text('Hi Hono')
})