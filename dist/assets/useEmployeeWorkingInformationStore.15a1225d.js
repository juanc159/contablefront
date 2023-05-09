import{E as s,bo as l,bp as o,bg as i,bq as r}from"./index.1bb36a93.js";const c=s(),e=r(),u=l("useEmployeeWorkingInformationStore",{state:()=>({loading:!1,typeAction:"list",workingInformationData:{},keyList:0,totalData:0,totalPage:0,currentPage:1,lastPage:0,formulario:{typeContract_id:null,employee_id:null,company_id:null,contractStartDate:null,contractFinalDate:null,salary:null,comprehensive_salary:null,contract_number:null,payroll_group:null,charge_id:null,typeContributor_id:null,subTypeContributor_id:null,health_background_id:null,health_fund_percentage:null,pension_fund_id:null,pension_fund_percentage:null,arl_id:null,risk_class_id:null,code_ciiu:null,code_id:null,compensation_box_id:null,severance_fund_id:null,withholding_deductions:null,reasonRetirement_id:null},typeContracts:[],reasonRetirements:[],payrollGroups:[],chargeCatalogs:[],contributingTypes:[],contributingSubTypes:[],healthBackgrounds:[],pensionFunds:[],compensationBoxs:[],arls:[],riskClass:[],codes:[1,2,3,4,5,6]}),getters:{},actions:{clearFormulario(){this.formulario={typeContract_id:null,employee_id:null,company_id:null,contractStartDate:null,contractFinalDate:null,salary:null,comprehensive_salary:null,contract_number:null,payroll_group:null,charge_id:null,typeContributor_id:null,subTypeContributor_id:null,health_background_id:null,health_fund_percentage:null,pension_fund_id:null,pension_fund_percentage:null,arl_id:null,risk_class_id:null,code_ciiu:null,code_id:null,compensation_box_id:null,severance_fund_id:null,withholding_deductions:null,reasonRetirement_id:null}},clonarForm(){for(const n in this.formulario)this.workingInformationData[n]=this.formulario[n]},async fetchDataForm(){const n=o();n.isLoading=!0,await i.post("/employee-workingInformation-dataForm",{company_id:c.company.id}).then(a=>{n.isLoading=!1,this.typeContracts=a.data.typeContracts,this.reasonRetirements=a.data.reasonRetirements,this.payrollGroups=a.data.payrollGroups,this.chargeCatalogs=a.data.chargeCatalogs,this.contributingTypes=a.data.contributingTypes,this.contributingSubTypes=a.data.contributingSubTypes,this.healthBackgrounds=a.data.healthBackgrounds,this.pensionFunds=a.data.pensionFunds,this.compensationBoxs=a.data.compensationBoxs,this.arls=a.data.arls,this.riskClass=a.data.riskClass}).catch(async a=>{n.isLoading=!1,console.log(await a)})},async fetchSave(){const n=o();return n.isLoading=!0,await await i.post("/employee-workingInformation-create",this.formulario).then(t=>(n.isLoading=!1,t.data.code===200&&(this.clonarForm(),this.clearFormulario(),e.toast("\xC9xito",t.data.message,"success")),t.data.code===500&&e.toast("Error",t.data.message,"danger"),t.data.status===422?(e.toast("Error",t.data.message,"danger"),{error:t.data.errors,status:t.data.status}):{status:t.data.code,formedit:t.data.data})).catch(async t=>(n.isLoading=!1,t.response.status===500&&e.toast("Error",t.response.data.message,"danger"),console.log(await t),t.response.status))},async fetchDelete(n){const a=o();a.isLoading=!0,await i.delete("/chargeCatalog-delete/"+n).then(t=>{a.isLoading=!1,e.toast("\xC9xito",t.data.message,"success")}).catch(async t=>{a.isLoading=!1,console.log(await t)})},async fetchInfoWorkingInformationData(n){const a=o();a.isLoading=!0,await i.get(`/employee-workingInformation-info/${n}`).then(async t=>{a.isLoading=!1,t.data.data&&(this.formulario=await t.data.data),this.clonarForm()}).catch(async t=>{a.isLoading=!1,console.log(await t)})},async getCitiesOfResidence(){const n=o();n.isLoading=!0,await i.post("/invoice-cities",{departament_id:this.formulario.residenceDepartament_id}).then(a=>{this.formulario.residenceCity_id=null,n.isLoading=!1,this.citiesOfResidence=a.data.cities}).catch(async a=>{this.formulario.residenceCity_id=null,n.isLoading=!1,console.log(await a)})},async getCitiesOffice(){const n=o();n.isLoading=!0,await i.post("/invoice-cities",{departament_id:this.formulario.officeDepartament_id}).then(a=>{this.formulario.officeCity_id=null,n.isLoading=!1,this.citiesOfOffice=a.data.cities}).catch(async a=>{this.formulario.officeCity_id=null,n.isLoading=!1,console.log(await a)})}}});export{u};