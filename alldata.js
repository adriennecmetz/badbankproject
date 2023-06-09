function AllData(){
  const ctx = React.useContext(UserContext);

  let users = [...ctx.users];
  console.log(JSON.stringify(users));
  
  function userNumber(i) {
    return (`User Account ${i+1} `);
  }

  function userInfo(user) {
    return [user.name, user.email, user.password, user.balance];
  }
  
  return (
    <>
    {users.map((user, i) => (
      <Card
      index = {i}
      key = {i} 
      bgcolor="success"
      txtcolor="white"
      header="All data Summary"
      text={userNumber(i)}
      allData={userInfo(user)}
      /> )
    )}
    </>
  )
}
