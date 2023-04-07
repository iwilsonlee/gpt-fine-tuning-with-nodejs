import { openai } from './api.js'
/**
listFineTunes() 方法返回的值是一个对象，其中包含以下字段:
id：Fine-tune 的唯一标识符。
model：Fine-tune 所使用的模型的 ID。
dataset：Fine-tune 所使用的数据集的 ID。
status：Fine-tune 的状态，可能的值为pending, running, succeeded, 或 failed。
created_at：Fine-tune 创建的时间戳。
model_size：Fine-tune 所使用的模型的大小。
name：Fine-tune 的名称。
failure_reason：如果 Fine-tune 失败，则包含失败原因的字符串。
hyperparams：Fine-tune 所使用的超参数的对象。
fine_tuned_model：Fine-tune 完成后生成的模型的 ID。
*/
async function listFineTunes() {
  try {
    const response = await openai.listFineTunes()
    console.log('data: ', response.data.data)
  } catch (err) {
    console.log('error:', err)
  }
}

listFineTunes()