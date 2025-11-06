import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from 'yup';
let std={
    firstname:'reethu',
    lastname:'yeggana',
    gender:'female',
    age:'21'
}

function StudentForm(){
    let sform = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:"",
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("first name pettuko ra").min(3),
            age:Yup.number().test({
                name:'ageLimit',
                test:function(v,ctx){
                    console.log("ctx:::",ctx);
                    if(!ctx.parent.gender){
                        return this.createError({message:'Mundu gender fill chey ra yedava'});
                    }
                    else if(ctx.parent.gender==='male'){
                        if(v>=25){
                            return true;
                        }
                        else{
                            return this.createError({message:"Mogollu 25 tarvate pelli cheskovali"});
                        }
                    }
                    else if(ctx.parent.gender==='female'){
                        if(v>=20){
                            return true;
                        }
                        else{
                            return false;
                        }
                    }
                    else {
                        return true;
                    }
                },
                message:'Ni age thakkuva, pakkaki poi aaduko'
            })
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    });
    
    useEffect(()=>{
        sform.setValues(std);
    },[])

    return (
        <div style={{border:'5px solid darkblue', margin:'2px',padding:'2px'}}>
            <h1>Student Form</h1>
            <form onSubmit={sform.handleSubmit}>
                <input type="text" {...sform.getFieldProps("firstname")}/>
                {sform.touched.firstname && sform.errors.firstname ? <div>{sform.errors.firstname}</div>:<br/>}
                <input type="text" {...sform.getFieldProps("lastname")} />
                <br />
                <input type="radio" {...sform.getFieldProps("gender")} value="male" checked={sform.values.gender==='male'}/>:Male
                <input type="radio" {...sform.getFieldProps("gender")} value="female" checked={sform.values.gender==='female'}/>:Female
                <input type="radio" {...sform.getFieldProps("gender")} value="others" checked={sform.values.gender==='others'}/>:Others
                <br />
                <input type="text" {...sform.getFieldProps("age")}/>
                {sform.touched.age && sform.errors.age ? <div>{sform.errors.age}</div>:<br/>}
                <button>Save</button>
            </form>
        </div>
    )
}
export default StudentForm;