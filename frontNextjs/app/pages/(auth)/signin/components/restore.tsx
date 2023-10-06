
// import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import { Button, TextField } from "@mui/material";
// import SendIcon from '@mui/icons-material/Send';
// import React, { FC, useEffect, useState } from "react";
// import { RxRestore, TxRestore } from "@/app/interfaces/restorepassword";
// import { RePassword } from "@/app/services/serviceRestorepassword";
// import { Errors } from "@/app/interfaces/errors";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import FormCode from "@/app/common/FormCode";
// import { ActionType } from "@/app/interfaces/wrapreducer";
// import Loader from "@/app/common/Loading";


// type Props = {
//     setSummary: Function,
//     setRestore: Function,
//     states: {
//         loading: boolean,
//         error: boolean
//     },
//     setStates: Function
// }

// const RestorePassword: FC<Props> = ({ setSummary, setRestore, states, setStates }) => {
//     const { handleSubmit, control, formState: { errors } } = useForm<TxRestore>()
//     const [codeState, setCodeState] = useState<boolean>(false)
//     const [data, setData] = useState<TxRestore>()
//     const [result, setResult] = useState<RxRestore>()

//     const sendData: SubmitHandler<TxRestore> = async (payload) => {
//         setStates({ type: ActionType.Loading, loading: true, error: false })
//         setData(payload)
//     }

//     const handleRestore = (event?: React.SyntheticEvent | Event) => {
//         setRestore(false)
//     }

//     useEffect(() => {
//         if (data) {
//             const callRestore = async (payload: any) => {
//                 const response = await RePassword(payload)
//                 if (!response.ok) {
//                     const err: Errors = await response.json()
//                     setSummary({ ...err })
//                     setStates({ type: ActionType.Error, loading: false, error: true })

//                 } else {
//                     setStates({ type: ActionType.Fetching, loading: false, error: false })
//                     const rx: RxRestore = await response.json()
//                     setResult(rx)
//                     setTimeout((code: number) =>alert(`Codigo ${code}`), 10, rx.code) // envido de codigo al usuario (usando nextjs backend (directorio api))
//                     setCodeState(true)

//                 }
//             }
//             callRestore(data)
//         } else {
//             return
//         }

//     }, [data])

//     return (
//         <>
//             {
//                 !codeState ? (
//                     <form onSubmit={handleSubmit(sendData)}
//                         style={{
//                             padding: '10px',
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             maxWidth: "400px",
//                             margin: "100px auto",
//                         }}
//                     >
//                         <Controller
//                             name="email"
//                             control={control}
//                             defaultValue=""
//                             rules={{
//                                 required: 'Email required',
//                                 pattern: {
//                                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                     message: 'Invalid email address\nMin length 8\nMax length 20\n@ is required',
//                                 },
//                                 minLength: 8,
//                                 maxLength: 200
//                             }}
//                             render={({ field }) => (
//                                 <TextField
//                                     {...field}
//                                     focused
//                                     label="Email"
//                                     variant="outlined" color="secondary" size="medium"
//                                     error={!!errors.email}
//                                     helperText={errors.email?.message}
//                                     placeholder="johndo@gmail.com"
//                                     sx={{
//                                         margin: "1rem",
//                                         width: "100%",

//                                     }}
//                                 />
//                             )}
//                         />
//                         <Button
//                             variant="contained"
//                             type="submit"
//                             sx={{
//                                 width: "100%",
//                                 margin: "1rem",
//                                 color: "white",
//                                 backgroundColor: "purple",
//                                 "&:hover": {
//                                     backgroundColor: "orchid",
//                                 },
//                             }}
//                             endIcon={<SendIcon />}
//                             disabled={states.loading}
//                         >
//                             Send
//                         </Button>
//                         <Button
//                             variant="contained"
//                             onClick={handleRestore}
//                             sx={{
//                                 width: "50%",
//                                 margin: "0.5rem",
//                                 color: "white",
//                                 backgroundColor: "purple",
//                                 "&:hover": {
//                                     backgroundColor: "orchid",
//                                 },
//                             }}
//                             startIcon={<ArrowBackIcon />}
//                             disabled={states.loading}
//                         >
//                             Back
//                         </Button>
//                         {
//                             states.loading ? <Loader /> : ""
//                         }

//                     </form>

//                 ) : (
//                     <FormCode setSummary={setSummary} code_id={result?.id} setStates={setStates} states={states} />
//                 )
//             }

//         </>

//     )
// }

// export default RestorePassword