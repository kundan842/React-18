
=> raect is jaavscript librery to create user interfaces , vue js and angular are framwork
=> librry is like tool that provide specific functionality, on the other end 
frameworks provide set of compltet tools and guidelines to build app
=> so in react app other third party libryr need to be added for routing, form validation and state manegement
=> react app can be created using
    1. create React App (CRA)
    2.Vite (used now) 
=> npm create vite@4.1.1
   give project name then librery and final js or ts
     cd 1_react_app
  npm install
  npm run dev

=> node modules contanis third party librery like react so on
    => public folder contanis public files like images, video etc
    => src contanis component as of now app component is there
    => packeg.json => information about react app 
    => ts config , contanis configuration which decides how ts should be converted to js
    => index.html main conatiner of react app
      "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
   "typescript": "^4.9.3",
    "vite": "^4.1.0"

=> in react recat dom librarey  renders the dom tree
=> in src/main.tsx
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
  => index.html have main conteriners so insider that div container with the id =root
  react dom renders the App component
  => vite uses hmr => hot module load
  => pascal convention for component => KundanBhagat

  =================================================================================
      Adding bootstrap
=>  npm i bootstrap@5.2
=> app.css include all the css that App component need
=> index.css include the global css that is provided by the vite so wil  delete interfaces
=> import 'bootstrap/dist/css/bootstrap.css' this in main.tsx
=> add listGrooup from bootstrap and replace class with the className as class is 
keyword in jsx
=> each react component should return only on elelemt so warap multiple elelemt
wrap is inside div or fragment
=> <></> to wrap react interanlly used the fragment
=> react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
error when rendering elelemt with map method from array so key prop and unique value should be provided
=> {} towrite anyjavascript expression
==============================================================================
                conditional rendering
=>  {items.length == 0 && <p>no item found to display</p>}
==============================================================
            handling event
=> raect has built in props onClick for each eleemmt to hanlde click event
  <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>

=> heer handleClick is function so we are just passing the refernce to that function 
not calling like  handleClick() it will be called after click 
=================================================================================================
            managingg state
=>each compoennt in raect has some state associated with it
=> react hooks like usestate to manage state of compoennt
=> active class in css to highlight the element
======================================================================================
        props
=> props to pass data to compoennt
=>using interface we can define the shape of the object
=> so compoennt which are using props can define the keys of props obejct and type 
using interface
=======================================================================================
                        passing function via props
=> on the child compoennt if some eleemmt is slected in that case to make sure 
that the parent compoennt knows which eleemmt is slected so particaulr thing can be document
we pass a function refernce from parent to child as props and once sleected 
item from child we call the passed function
===========================================================================================================
                                  props vs state
=> props input passed to compoennt where state is data managed by component
=> props are immutable where as the state are mutable
=> whenever the props or state chnages re rendering occurs
=> so props are like argumnet passed to function whereas the state are local variable
====================================================================================================================================
            passing children to compoennt
=> using children (inbuilt prop key)prop we can pass  childern element to component
================================================================================================================================================
                    stylimg css compoennt
=> vanila css , css modules and css libreries can be used to style
=> vanila css is rarely used to style , bootstrap libreries are good to use
=> using modules file.module.css and import it as styled we can use it 
in compoennt and avoid name confilict
=> css in js , some libreries are used wheere we use css in componennt file itself
 npm i styled-component
 npm i types/styled-component
 =================================================================================================================
                        adding icons: 
=>  to add icons to react  react-icon librarey is used
  npm i react-icon
=> import it in app.tsx and use
=> npm i react-icons
==================================================================================================================================
                                  state hooks
=> related varivable can be used as flat obejct
const [person, setPerson] = usestate({name:, surname:})
=> while data is loadinng to show spiiner we can use page level state variable
const [isLoading, setLoading] = useState(false)
=> obejct used in state is immutable or read only
=> so to upadte the state in that case new obejct need to be created

const [drink, setDrink] = useState({title: 'coke', price: 4})

setDrink({...drink, price:6})
=> spraed operator in js is shallow copy means the refer to same obejct in memory
=> updating array as state is similar need to create new array
const [tags, setTags] = useState(['haapy', 'cheerful'])
#add 
setTags([...tags, 'excited'])
#remove
setTags(tags.filter(tag => tag !== 'happy'))
#upadte the tag
setTags(tags.map(tag => tag == 'happy' ? 'happiness' : tag))
==============================================================================
=> upating componennt state with immer package
=> npm install immer@9.0.19
=> import produce from "immer";
=> while setState methood call the produce  which takes arraow function
=> draft is proxy state object
=====================================================================================
sharing state between compoennt
=> compoennt which has the state should responsible for chnages in state
=> cart componnet shows cars itesm and navbar shows the count in cart
=> so if item is remeove from cart , navabr should show decresed count
=> so there need to be communication between cart and navabr
=> so heer app componnet will be parent of navbar and cart and product items
will be passed from app as props to cart and count to navbar
=> so if item is removed from cart state will be updated in app component 
and correct number will be passed to navbar
================================================================================
=> spread operator performs shallow copy
=> if a objetc has key which is refreing to obejct then in copied object using
sperd operator key will refer to same obehct so better to recreate and upadte value
const [game, setGame]  = useState({
        id:1,
        player:{
            name: "jhon"
        }
    });

    const handleClick = () =>
    {
        
        setGame({...game, player:{name:'bob'}})
    }
    
===============================================================================================================
keep component name in capital lettetrs

div.mb-3>label.form-label+input[type=number].form-control
==================================================================================
button class like button primary or form classes like mb-3
form-label for label and form-crontrol for input is part of bootstrap
so instll bootstrap and add it to main.tsx
=> index.css import in main it contains  global css applied to all component 
===========================================================================================
        handling form submsisiion
=> when form is submitted by default the from is submiited to server
=> and page reloads 
=> on submision a object of type FormEvent gets generetd 
=> so using this object we can avoid page reloading using prevntDefault
=================================================================================
    accessing  input fields of form
=>  like react use state , useRef  is one of the react hook
=> useref or ref hook refers to any ellemnt of dom 
=> useref can refer to button ellemnt, input ellemnt so on
=> so if it is refring to input ellemt then should define its type using built in
interfaces 
=> each input element has value 
const nameRef = useRef<HTMLInputElement>(null);
 <input ref={nameRef} id="name" type="text" className="form-control" />
 if (nameRef.current !== null) person.name = nameRef.current.value;
 ================================================================================
 => input field value can also be accesed using the state hook
 => ther is onChange event for input field which get called each time
 user types  so each time state of component is updated
 => so it renders each time user type in
 => as input field , user enters some value so to make it controlled eleemmt
 its value property should be initiliazed using raect compoonnt varibals
 =====================================================================================================
              manging FORMS with the react hook form

 => npm i react-hook-form@7.43 
 => import {useForm} rom react-hook-form
   use it in comoonent
 =>  const form = useForm();
  console.log(form);

=> this form obejct has various built in methods like register,handleSubmit,  reset, formState, 
register
: 
(name, options = {}) => {…}
handleSubmit
: 
(onValid, onInvalid) => {…}
=====================================
 => const { register, handleSubmit } = useForm();
  =>console.log(register("name"));
=> we can register input field with its id as arguments
=> it return object contaning methods like onChnage, onBlur, so on
=> it uses useRef so no rerendering occurs each time
{name: 'name', onChange: ƒ, onBlur: ƒ, ref: ƒ}
name
: 
"name"
onBlur
: 
async (event) => {…}
length
: 
1
name
: 
"onChange"
arguments
: 
(...)
caller
: 
(...)
[[FunctionLocation]]
: 
react-hook-form.js?v=e4810fba:1234
[[Prototype]]
: 
AsyncFunction
[[Scopes]]
: 
Scopes[4]
onChange
: 
async (event) => {…}
length
: 
1
name
: 
"onChange"
arguments
: 
(...)
caller
: 
(...)
[[FunctionLocation]]
: 
react-hook-form.js?v=e4810fba:1234
[[Prototype]]
: 
AsyncFunction
[[Scopes]]
: 
Scopes[4]
ref
: 
(ref) => {…}
length
: 
1
name
: 
"ref"
arguments
: 
(...)
caller
: 
(...)
[[FunctionLocation]]
: 
react-hook-form.js?v=e4810fba:1402
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[6]
[[Prototype]]
: 
Obje


=> handleSubmit fucntion takes this call back submit handler where data of type FieldValue is passed
 handleSubmit(onValid: SubmitHandler<FieldValues>, onInvalid?: SubmitErrorHandler<FieldValues> | undefined)

 onSubmit={handleSubmit(data => console.log(data))}

 ==================================================================
 <input
          id="age"
          {...register("age")}
          type="number"
          className="form-control"
        />
=> calling register returns objetc so spreding to get all value to input field

========================================================================================================
form validation and showing errros 
=> input fiels validation can be added to register method as second argument
 {...register("name", { required: true, minLength: 3 })}
=> so if the form is not vallid then submithandler will not submit the form
=> formState object from the useForm hook can be used to get form validation errro obejct
this form object has various methods and object
defaultValues
: 
(...)
dirtyFields
: 
(...)
errors
: 
Object
isDirty
: 
(...)
isLoading
: 
(...)
isSubmitSuccessful
: 
(...)
isSubmitted
: 
(...)
isSubmitting
: 
(...)
isValid
: 
(...)
isValidating
: 
(...)
submitCount
: 
(...)
touchedFields
: 
(...)
get defaultValues
: 
() => {…}
get dirtyFields
: 
() => {…}
get errors
: 
() => {…}
get isDirty
: 
() => {…}
get isLoading
: 
() => {…}
get isSubmitSuccessful
: 
() => {…}
get isSubmitted
: 
() => {…}
get isSubmitting
: 
() => {…}
get isValid
: 
() => {…}
get isValidating
: 
() => {…}
get submitCount
: 
() => {…}
get touchedFields
: 
() => {…}

=> errors obejct looks like something this
name
: 
message
: 
""
ref
: 
input#name.form-control
type
: 
"minLength"

=> error object looks something like this
age
: 
{type: 'max', message: '', ref: input#age.form-control}
name
: 
{type: 'minLength', message: '', ref: input#name.form-control}

for each validtion its type will be there in errors obejct
age
: 
{type: 'max', message: '', ref: input#age.form-control}
name
: 
{type: 'required', message: '', ref: input#name.form-control}
[[Prototype]]
: 
Object

=> when dealing with various forms input its better to define the FormData
interface which contains input id as key and its type as value so 
============================================================================
            Forms validation
=> there are so much libreries to do form validation
=> joi, zod, yup and others 
=> npm i zod@3.20.6
=> zod provides schema based validation
=> type script type is similar to typescript interface
=>  npm i @hookform/resolvers@2.9.11
these reslovers allows for schema based validations for almost all librery 
like zod, joi etc
=>import {zodResolver} from '@hookform/resolvers/zod'
=> in input filed value is string so while registering input field like
age need to set this   {...register("age", { valueAsNumber: true })}
=> and for emty string , it cant be resloved as number so need to
update schema
onst schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast of 3 character" }),
  age: z
    .number({ invalid_type_error: "age is required" })
    .min(18, { message: "minimun age should be 18" }),
});

=> zod.dev for documentation
============================================
    disabling the submit button
=> formState obeject of useForm hook has property isValid as errors property
=> if all the validation is passed or no erros MEANS the form is valid  then isValid is true
<button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
=================================================================================================================
componennts that holds the state should be responsible for setting the state


reduce(callbackFn)
reduce(callbackFn, initialValue)
=====================================================================
=> when the multiple components are written with each other its to keep merging between the  compoennt
wrap the componennt inside the div with class like mb-3
=> mb stands for margin bottom
=================================================================================================================================
                            effect hook
=> react componennt should be pure functional component
=> meand given the same input should return same output teher should be no side effect
=> but there are some cases where some side effect are invloved means 
certain acion need to be performed inside compoennt but the componnet should not get rendered
=> side effect are like
  => storing the data in local storage so lettetr it can be used
  => fetching the data from server
  => manually modifying the dom elelment
these action have nothing to do with rendering so no need to return jsx markup
=> useEffect(() =>{})
=> using useEffect we call react to execute the piece of code after component renders
=> useEffect => after render 
=> just like ref and state hook we can call the the effect hook from the top not inide if or loop
=> useEffect is callled after each render
=> useEffect takes the one callback function and other optional dependencies array
=> the callback fucntion is called by react
=> if dependencies array is not passed then useEffect is called each time component renders
=> if  dependencies array is empty then useEffect is called only once the
 compoennt renders for the first time
 => if dependencies array contains one or more value then that useeffect is called
 each time the dependencies chnages
 ===========================================================================================================
                              effect cleanup
=> somtimes task performed in effect hook need to be cleaned upadte
=> like if some connection is  made to chatbot then if user naviaget to other page then
connection need to be cleaned up
=> or if frtching some data from server then that either stop the data being fetached or
delete the fetched data
=> so to clean up the code  from callback of useeffect we can return the call back function 
=> that returned callback function is  called whenever cleaning or unmounting is required
=> while running app1 in dev mode react renderes the commponent twice so
after rendering for the first time , recat unmount the commopnnet
so while unmounting the compoennt it calls the cleanup methiod of useEffect
=> SO cleanup METHOD FORM EFFECT HOOK IS CALLED ONLY WHEN THE UNMOUNTING IS REQUIRED
=====================================================================================================================
                        FECTHING  DATA FROM BACKEND
=> to make http request can use 
1. fetch() => this methpd is implemenetd by almost all the browsers
2. axios => liberery
npm i axios
=> if the returended data contains various keys , then to make type safty and
deal with the required keys of obejct we can use typescript interface
=> interface can be used to define the shape of the object
like keya and its type
=> while calling to server the server will not return the data immediatly 
it will take half of second or less
=> so axios will return the promoise obejct
=================================================
PROMISE is obejct that holds the eventual result or falure of an asynchronous
operation
asynchronous opeartion = long running operation
=> all returned promise obejct has method then whcih takes a callback fucntion which is
called when the promise is resloved and result is readdy
=> promise obejct  has the catch method which contains the callback 
fucntion with error as argument called when any error occurs while
performing the request
======================================
=> HTTP =  a protocol that define how the data should be transferrd over the internet
=> so each browsers make request to server , server returns html, js, data
=> the request and resposne can be seen in the network tab fetch hxr method
=> each request and resposne obejct have headers which contain metadata and 
body which contains data
===============================================================================================================================================
                    working with the async and await
=> while woking with the promise
=> when promise is resloved returns the response and when rejetced return the error
=> those thing need to be handled in then and catch method
=> same can be achieevd using async and await
=> heer useEffect callback cant be async so will have to deifine a async fucntion and call inside callback effect
=> to handle error in this case need to use try and catch blcok
=> inside cathc block we cannot define the type of error as argument
======================================================  =====================================================================
========================================================================================================================================
            canceling the fetch request
=> if a request is made to server to get the data but if the user naviagte to
other page  there is no point in getting the data from server and rendering it 
=> in such cases better to cancel the fetch request
=> AbortController =A controller object that allows you to abort one or more DOM requests as and when desired
=> parametrs of get method of axios
=> get(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<User[], any>>
{signal: controller.signal}
=> Returns the AbortSignal object associated with this object
=> while in strict mode , compoennt is mounted or rendered twice so after  being renderd for the first time
when compoennt is unmounted and renderd twice then using axioxs request sent to server using get got canacled as same as user
navigate to other page. this generate the CanceledError so clean up code executes
====================================================================================================================================================
                         showing the laoding menu
=> every promise object has finally method which will be called wheter promise is 
resloved or rejetced
=> to add spcae between json obejct and html element {" "} is used
=>  className="list-group-item d-flex justify-content-between" 
=> d stands for display flex and to move the delete to rigth this  is used
================================================================================================
while adding or delting or updateing the data there are two approch
1.optimistic
2.pessimistic

1. optimistic approach
  => update the ui first 
  => call the server then
2. pessimistic approach
  1. call the server
  2.update the ui
=> while adding data to server or making post request , the data is sent to request
body . request body is also known as request payload
=> post method return saved object which is ni response body or response.daat
=============================================================================================================
                               extracting the service
=> a componennt should be responsible for returning markup and handling
user interactions at high level
=> a compoennt need not to make http request and know end point
=> to make http request to endpoint a seperate service need to be created
=> making a  seperate service module makes code more resuable and modular
=====================================================================================
 creating generic http service which will work for to get update delete for 
 all kind of endpoints and all type of entity whether its user or post
 ============================================================================
   custom hooks 
=> custom hooks allows to share functionality between diffrent componennt
=> like fetching usere, cutom hooks can be created out of it 





