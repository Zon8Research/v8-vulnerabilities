<b>VULNERABILITY DETAILS</b>

The following javascript code causes a crash in the latest version of d8. 
a ( { b() {} } [ [ 1 , c.d = 1 ] = 1.1 ] )

I've minimized the crashing input as best as I could. It is crashing here inside src/interpreter/bytecode-generator.cc:
      if (ObjectLiteral* pattern = lhs_data.expr()->AsObjectLiteral()) {
        // Split object literals into destructuring.
        BuildDestructuringObjectAssignment(pattern, op, lookup_hoisting_mode);
      } else if (ArrayLiteral* pattern = lhs_data.expr()->AsArrayLiteral()) {
        // Split object literals into destructuring.
        BuildDestructuringArrayAssignment(pattern, op, lookup_hoisting_mode);
      } else {
        DCHECK(lhs_data.expr()->IsVariableProxy());                          <<<  DEBUG ASSERT CRASH HERE
        VariableProxy* proxy = lhs_data.expr()->AsVariableProxy();
        BuildVariableAssignment(proxy->var(), op, proxy->hole_check_mode(),  <<<  RELEASE CRASH HERE
                                lookup_hoisting_mode);

It appears that the code assumes the object is a VariableProxy if neither previous case matches and that isn't true for this example.


<b>CREDIT INFORMATION</b>
<b>Externally reported security bugs may appear in Chrome release notes. If</b>
<b>this bug is included, how would you like to be credited?</b>
Reporter credit: Chris Salls, Chani Jindal, Jake Corina
This was found by a fuzzing project from UCSB. 
