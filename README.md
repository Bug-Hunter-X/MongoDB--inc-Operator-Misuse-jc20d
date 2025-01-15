# MongoDB $inc Operator Misuse
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error arises from incorrectly specifying the value to increment by, which may lead to unexpected results or errors. The solution shows the correct way to use the `$inc` operator to increment a field in a MongoDB document.

## Bug
The original code attempts to increment the value of a field using `$inc`, but it uses an invalid syntax or an inappropriate value type.

## Solution
The corrected code demonstrates the proper use of `$inc` to correctly increment the field's value.