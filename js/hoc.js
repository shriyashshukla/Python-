// function withLogging(WrappedComponent) {
//     return function(props) {
//       console.log('Component is rendered with props:', props);
//       return <WrappedComponent {...props} />;
//     };
//   }
  
//   const MyComponent = (props) => <div>{props.name}</div>;
//   const MyComponentWithLogging = withLogging(MyComponent);

  
function add(a,b){
    return a+b;

}

function higherOrder(a,addReference){
    return addReference(a,5)    

}

higherOrder(10,add)