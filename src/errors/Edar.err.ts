export class EdarErr extends Error {
  status: Status;
  msg: string;
  constructor({ status, msg }: Constructor) {
    super();
    this.name = "EdarErr";
    this.msg = msg;
    this.status = status;
  }
}

type Constructor = { status: Status; msg: string };
type Status =
  | 100
  | 101
  | 102
  | 200
  | 201
  | 202
  | 400
  | 401
  | 403
  | 404
  | 422
  | 500;
