'use strict'

class Collection{
    constructor(model){
        this.model=model
    }
    async createStu(stuInfo){
        let StuRecord= await this.model(stuInfo);
        return StuRecord;
    }
    async getID(id){
        let getRecord=await this.model.findOne({where:{id:id}});
        return getRecord
    }
    async getALL(){
        let getRecords=await this.model.findAll()
        return getRecords
    }
    async update (id,infoUPdate){
        let idRecord= await this.model.findOne({where:{id:id}})
        let UpdateRecord=await this.model.update(infoUPdate)
        return UpdateRecord

    }

async delete(id){
    await this.model.destroy({where:{id:id}})
}
    

}
module.exports=Collection