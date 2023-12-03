// Context are of type : 
// Global Execution Context :  stored in this
// Function Execution Context
// Eval Execution Context

// Javascript code is run in two phases : 

// Memory creation phase (or called creation phase) : in this phase only memory is allocated to the variables functions
// Execution phase : Code is executed in this ohase
//                For every time the code is execute, a context is created, which consist of : 
// 		New Variable Enviorment
//                 Execution Thread
// 	 It returns the variable to the parent context, ie. global execution context, and then it is delete to free up the memory