import { MainRuntime } from '@teambit/cli';
import { ScopeAspect, ScopeMain } from '@teambit/scope';
import { PostExportExampleAspect } from './post-export-example.aspect';

export class PostExportExampleMain {
  static slots = [];
  // define your aspect dependencies here.
  // in case you need to use another aspect API.
  static dependencies = [ScopeAspect];

  static runtime = MainRuntime;

  static async provider([scope]: [ScopeMain]) {
    scope.registerOnPostExport(doSomethingAfterExport);
    return new PostExportExampleMain();
  }
}

PostExportExampleAspect.addRuntime(PostExportExampleMain);


async function doSomethingAfterExport({ids}) {
  console.log('exportedIds', ids);
}