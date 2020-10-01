import typeRepository from '~/enum/typeRepository'
import * as mapper from '~/services/mapper'

import DeckEntity from '~/entities/DeckEntity'
import CardEntity from '~/entities/CardEntity'

import api from '~/services/api';
import uniqid from 'uniqid';

export default class Repository {
    /**
     * set type repository
     * @param {typeRespository|object} config 
     */
    constructor(config){
        if(typeof config === 'string' && typeRepository.isValue(config)) {
          
            let type = config

            this.type = type
            this.mapper = type
            this.context = `${type}Entity`.toUpperCase()
        }
        else if(typeof config === 'object') {
            this.type = config.type
            this._setCustomContext(config)
            this._setCustomMapper(config)

        }
        else {
            throw Error(`${config} not support for typeRespository`)
        }
    }

    _setCustomContext(config) {
        if(config.context !== undefined && typeof config.context !== 'function') {
            throw Error(`${config.context} not support is custom repository`)
        } else {
            this.context = config.context 
        }
    }

    _setCustomMapper(config) {
        if(config.mapper !== undefined && typeof config.mapper !== 'function') {
            throw Error(`${config.mapper} not support is custom repository`)
        } else {
            this.mapper = config.mapper 
        }
    }

    /**
     * @return {any}
     */
    get _provaider() { return this._provaiderFeild }
    set _provaider(value) { this._provaiderFeild = value }


    /**
     * @returns {typeRespository}
     */
    get type() { return this._type }
    /**
     * @param {typeRespository} value
     */
    set type(value) { this._type = value }


    /**
     * data provider
     * @returns {BaseEntity}
     */
    get context() { 

        if(this._context === undefined ) 
            throw Error('Context not init')
        
        return this._context
    }

    /**
     * set data provider
     * @params {string||function}
     */
    set context(type) {

        if(typeof type === 'function'){
            this._context = type
            return
        }

        switch(type){
            case `DECKENTITY`:
                this._context = DeckEntity
                break

            case `CARDENTITY`:
                this._context = CardEntity
                break

            default:
                throw Error(`${type} not mapped for context`)
        }
    }

    get mapper() { return this._mapper }
    set mapper(type) {

        if(typeof type === 'function'){
            this._mapper = type
            return
        }

        switch(type) {
            case typeRepository.DECK: 
                this._mapper = mapper.mapperDeck
                break

            case typeRepository.CARD:
                this._mapper = mapper.mapperCard
                break

            default:
                throw Error(`${type} not support for mapper repository`)
        }
    }

    /**
     * @param {any} data 
     */
    _processResponseSucessData(data) {
        
        let responseData = data.data
            , response = {}
            , self = this

        if(data.status === 200) {
            if(Array.isArray(responseData)) {
                response = responseData.map( source => new self.context(self.mapper(source)))
            } else {
                response = new self.context(self.mapper(responseData))
            }
        }

        return response
    }

     /**
     * @param {any} data 
     */
    _processResponseFailData(data) {

    }

    /**
     * @param {any} configProvaider 
     * @returns Repository
     */
    provaider(configProvaider) {

        this._provaider = configProvaider

        return this
    }

    //#region READ DATA

    /**
     * get all values in repository
     * @returns { Promise<BaseEntity[]>}
     */
    async all() {
        let self = this

        return api.get(`${this.type}`, this._provaider)
            .then( data => self._processResponseSucessData(data))
            .catch( data => self._processResponseFailData(data))
    }

    async getById(id) {
        let self = this

        return api.get(`${this.type}/${id}`, this._provaider)
            .then( data => self._processResponseSucessData(data))
            .catch( data => self._processResponseFailData(data))
    }


    //#endregion

    //#region WRITE DATA

    async add(model) {
        let data = new this.context(model)
        data.Id = uniqid()

        return api.post(`${this.type}`, data.clone(), this._provaider)
    }

    async update(model) {
        let data = new this.context(model)
        return api.put(`${this.type}/${data.Id}`, data.clone(), this._provaider)
    }

    async delete(model) {
        let data = new this.context(model)
        return api.delete(`${this.type}/${data.Id}`, this._provaider)
    }

    //#endregion
}

export { typeRepository }