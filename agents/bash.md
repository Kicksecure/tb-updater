Scripts use set -o errexit (set -e). Arithmetic pitfall: (( 0 ))
returns exit code 1, which triggers errexit. Avoid (( var += 1 ))
in favor of var=$((var + 1)), which is an assignment and always
succeeds regardless of the computed value.
