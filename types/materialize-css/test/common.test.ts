import * as M from "materialize-css";
import * as jQuery from "jquery";
import cash from "cash-dom";

// Test Component Initialization

// $ExpectType Autocomplete
M.Autocomplete.init(document.querySelector('.whatever')!);
// $ExpectType Autocomplete[]
M.Autocomplete.init(document.querySelectorAll('.whatever'));
// $ExpectType Autocomplete[]
M.Autocomplete.init(jQuery('.whatever'));
// $ExpectType Autocomplete[]
M.Autocomplete.init(cash('.whatever'));
