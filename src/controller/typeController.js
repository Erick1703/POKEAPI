
import Types from "../models/type.model.js";

export const addType = async(req,res)=>{
    const {name, description} = req.body;


    try{
        const newTypes = new Types({
            name,
            description
        });
const typeSave = await newTypes.save()

res.json({
    name:typeSave.name,
    description: typeSave.description

})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


export const getTypes = async(req, res)=>{
    const types = await Types.find();

    res.json(types)


}


export const getTypeById = async(req, res)=>{
    const type = await Types.findById(req.params.id)
    if(!type) return res.status(404).json({message: 'Task not found'})
        res.json(type)
}

export const deleteType = async(req, res)=>{

const type = await Types.findByIdAndDelete(req.params.id)
if(!type) return res.status(404).json({message: 'Task not found'})
    return res.sendStatus(204)
}


export const updateType = async(req, res)=>{

    const type = await Types.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    })
    if(!type) return res.status(404).json({message: 'Task not found'})
        res.json(type)
    }