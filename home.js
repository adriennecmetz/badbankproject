function Home(){
   const ctx = React.useContext(UserContext);
  
  return (
     console.log(JSON.stringify(users));
    
    
    <Card
      bgcolor="success"
      txtcolor="light"
      header="BadBank Project"
      title="Welcome to Adrienne's Bad Bank"
      text="Create an Account to Begin"
      body={(<img src="bank1.png" className="img-fluid" alt="Responsive image"/>)}
    />    



  );  


}
