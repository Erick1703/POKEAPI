import {z} from 'zod'


 export const pokemonSchema = z.object({
name: z.string({
    required_error: 'name is required'
}),
level:z.number({
required_error: 'Level is required'
}),
type: z.string({
    required_error: 'Type is required'
}),
region: z.string({
    required_error: 'Region is required'
})
})

