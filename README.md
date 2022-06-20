# teambit-post-export-slot-example

An example how to use the PostExport slot of Scope aspect.

This example prints the full `ComponentID` exported during the export.
To run it, please run the following after cloning the project:

```
bit compile
bit install
```

Create a new directory `my-scope` in `/tmp` and run the following there
```
bit init --bare
bit start
```
wait a few minutes until it shows the link to http://localhost:3000

Go back to the cloned repo, and run the following:

```
bit remote add http://localhost:3000
bit tag
bit export
```

You should see following in the output 
```
exportedIds [
  ComponentID {
    legacyComponentId: BitId {
      scope: 'my-scope',
      box: undefined,
      name: 'post-export-example',
      version: undefined
    },
    _scope: undefined
  }
]
exported the following 1 component(s):
my-scope/post-export-example
```

