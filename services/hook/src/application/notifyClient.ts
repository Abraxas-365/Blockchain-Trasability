import axios from "axios";
import Application from "./initApp";

export async function notifyClient(this: Application, documentId: string, userId: string): Promise<any> {
  let document = await this.database.getDocumentById(documentId);
  let user = await this.database.getUserById(userId);

  const apiUrl = axios.create({
    baseURL: user.company.api_hook.url,
  });

  const { data } = await apiUrl.post("api/v1/admin/cuenta/login", { email: user.company.api_hook.email, password: user.company.api_hook.password });

  const config = {
    headers: { Authorization: `Bearer ${data.result.token}` },
  };
  await apiUrl.post(
    "api/v1/client/proceso/notifica-transfer-blockchain",
    {
      id_registro: document?.id_registro,
      hash_transaction: document?.transactionId,
      json_transaction: document?.transaction_result,
      fecha_transaction: document?.upload_date,
    },
    config
  );
}
// api/v1/admin/cuenta/login
//
