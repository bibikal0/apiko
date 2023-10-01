const globallyScoped = "globally-scoped";

function foo() {
  console.log(globallyScoped);
}

foo();

function bar() {
  const functionScoped = "function-scoped";
  console.log(functionScoped);
}

console.log(functionScoped);
bar();

function baz() {
  {
    const blockScoped = "block-scoped";
    console.log(blockScoped);
  }

  console.log(blockScoped);
}

baz();
