 import Regions from "../models/region.model.js"
 
 export const  getRegions =async (req, res)=>{
    const regions = await Regions.find()
res.json(regions)
 }

 export const addRegion = async(req, res)=>{
    const {name, description} = req.body;

    try{
const newRegion = new Regions({
    name, 
    description
})

const regionSave = await newRegion.save();
res.json({
    name: regionSave.name,
    description: regionSave.description
})
    }catch(error){
        res.status(500).json({message:error.message})
    }
 }

 export const getRegionById = async(req, res)=>{
    const region = await Regions.findById(req.params.id)

    if(!region) return res.status(404).json({message: "Region not found"})

        res.json(region)
 }


 export const deleteRegion = async(req, res)=>{
    const region = await Regions.findOneAndDelete(req.params.id)
    if(!region) return res.status(404).json({message:"Region not found"})
        return res.sendStatus(204)
 }

 export const updateRegion = async(req, res)=>{
    const region = await Regions.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    })

    if(!region) return res.status(404).json({message:"Region not found"})
        res.json(region)
 }