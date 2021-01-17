// |reftest| shell-option(--enable-private-fields) skip-if(!xulRuntime.shell) -- requires shell-options
// This file was procedurally generated from the following sources:
// - src/class-elements/eval-contains-superproperty-2.case
// - src/class-elements/initializer-eval-super-property/cls-decl-private-fields-eval-arrow-body.template
/*---
description: super['x'] in StatementList of eval (direct eval)
esid: sec-performeval-rules-in-initializer
features: [class, class-fields-public, class-fields-private]
flags: [generated]
info: |
    The remaining eval rules apply as outside a constructor, inside a method, and inside a function.

    Additional Early Error Rules for Eval Outside Methods

      These static semantics are applied by PerformEval when a direct eval call occurs outside of a MethodDefinition.

      ScriptBody : StatementList

      It is a Syntax Error if StatementList Contains SuperProperty.

---*/


var executed = false;
class A {}
class C extends A {
  #x = eval('executed = true; () => super["x"];');
  x() {
    this.#x();
  }
}

new C().x();

assert.sameValue(executed, true);

reportCompare(0, 0);
