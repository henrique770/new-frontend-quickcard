/**
 * @type BaseEntity
 * @typedef BaseEntity
 */
class BaseEntity {

    constructor(args) {

        this._id = args.Id
        this._isActive = args.IsActive
        this.ColumnsMapper = []
    }

    get ColumnsMapper() { return this._columnsMapper }
   
    /**
     * @parms columns {string[]}
     */
    set ColumnsMapper(columns) { 

      if(!Array.isArray(columns))
        throw Error('value is not array type')

      let columnsMapper = ["Id", "IsActive"].concat(columns)
                            
      this._columnsMapper = columnsMapper.filter((item, pos) => columnsMapper.indexOf(item) === pos)
     }


    get Id() { return this._id }
    set Id(value) { this._id = value }

    get IsActive() { return this._isActive }
    set IsActive(value) { this._isActive = value }

    _setDefaultValue(value, defaultValue) {
      if(value !== undefined)
        return value

      return defaultValue
    }

    clone() {
      let objectClone = {} 

      for(let i = 0; i < this.ColumnsMapper.length; i += 1) {
        let key = this.ColumnsMapper[i]

          objectClone[key] = this[key]
      }
      
      return objectClone
    }
}

export default BaseEntity