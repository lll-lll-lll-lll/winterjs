// |reftest| shell-option(--enable-private-methods) skip-if(!xulRuntime.shell) error:SyntaxError -- requires shell-options
// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-privatename-whitespace-error-static-accessor-set-meth.case
// - src/class-elements/syntax/invalid/cls-decl-elements-invalid-syntax.template
/*---
description: No space allowed between sigil and IdentifierName (Static Accessor set Method) (class declaration)
esid: prod-ClassElement
features: [class-static-methods-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Updated Productions

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

---*/


$DONOTEVALUATE();

class C {
  static set # m(_) {}
}
