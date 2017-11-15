#include <nan.h>
#include "x11hash.h"

using namespace v8;

const char* ToCString(const String::Utf8Value& value) {
  return *value ? *value : "<string conversion failed>";
}

void getPoWHash(const Nan::FunctionCallbackInfo<Value>& args) {
  Isolate * isolate = args.GetIsolate();
  String::Utf8Value str(args[0]->ToString());
  const char* input = ToCString(str);
  char* output = (char *) malloc(32);
  x11_gost_hash(input, output);
  Local<String> retval = String::NewFromUtf8(isolate, output);
  free(output);
  args.GetReturnValue().Set(retval);
}


void Init(v8::Local<v8::Object> exports) {
  exports->Set(Nan::New("getPoWHash").ToLocalChecked(), Nan::New<FunctionTemplate>(getPoWHash)->GetFunction());
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Init)