// |reftest| shell-option(--enable-private-methods) skip-if(!xulRuntime.shell) -- requires shell-options
// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-ary-rest-iter.case
// - src/dstr-binding/default/cls-expr-private-gen-meth-dflt.template
/*---
description: BindingElement with array binding pattern and initializer is not used (private class expression method (default parameter))
esid: sec-class-definitions-runtime-semantics-evaluation
features: [class, class-methods-private, generators, destructuring-binding, default-parameters]
flags: [generated]
info: |
    ClassExpression : class BindingIdentifieropt ClassTail

    1. If BindingIdentifieropt is not present, let className be undefined.
    2. Else, let className be StringValue of BindingIdentifier.
    3. Let value be the result of ClassDefinitionEvaluation of ClassTail
       with argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
           i. Let status be the result of performing
              PropertyDefinitionEvaluation for m with arguments proto and
              false.
        [...]

    14.4.13 Runtime Semantics: PropertyDefinitionEvaluation

    GeneratorMethod :
        * PropertyName ( StrictFormalParameters ) { GeneratorBody }

    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this GeneratorMethod is strict mode code,
       let strict be true. Otherwise let strict be false.
    4. Let scope be the running execution context's LexicalEnvironment.
    5. Let closure be GeneratorFunctionCreate(Method,
       StrictFormalParameters, GeneratorBody, scope, strict).

    9.2.1 [[Call]] ( thisArgument, argumentsList)

    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]

    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )

    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]

    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    BindingElement : BindingPatternInitializer opt

    1. If iteratorRecord.[[done]] is false, then
       a. Let next be IteratorStep(iteratorRecord.[[iterator]]).
       [...]
       e. Else,
          i. Let v be IteratorValue(next).
          [...]
    4. Return the result of performing BindingInitialization of BindingPattern
       with v and environment as the arguments.
---*/
var values = [2, 1, 3];
var initCount = 0;

var callCount = 0;
var C = class {
  * #method([[...x] = function() { initCount += 1; }()] = [values]) {
    assert(Array.isArray(x));
    assert.sameValue(x[0], 2);
    assert.sameValue(x[1], 1);
    assert.sameValue(x[2], 3);
    assert.sameValue(x.length, 3);
    assert.notSameValue(x, values);
    assert.sameValue(initCount, 0);
    callCount = callCount + 1;
  }

  get method() {
    return this.#method;
  }
};

new C().method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');

reportCompare(0, 0);
