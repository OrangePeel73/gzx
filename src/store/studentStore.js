import axios from 'axios'

export default {
	state:{
		students:[]
	},
	getters:{
		students:state=>state.students
	},
	mutations:{//突变 
		alterStudents:(state,data)=>{
			state.students = data;
		}
	},
	actions:{
		saveStudent:(context,form)=>{
			return new Promise((resolve,reject)=>{
				axios.post('http://47.95.7.13:3000/student/save',form).then(function(result){
					//保存成功之后
					context.dispatch('findAllStudent');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		findAllStudent:(context)=>{
			axios.get('http://47.95.7.13:3000/student/findAll').then(function({data}){
				context.commit('alterStudents',data)
			})
		}
	}
}