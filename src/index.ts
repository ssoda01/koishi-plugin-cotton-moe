import { Context, Schema } from "koishi";
import {} from "@koishijs/plugin-console";

import { getRandomName } from "./util";
export const name = "cotton-moe";

export interface Rule {
  msg_start: string;
  targetId: string;
}

export interface Config {
  mode?: "config";
  rules?: Rule[];
}
export const Config: Schema<Config> = Schema.object({
  mode: Schema.const("config" as const)
    .description("配置文件")
    .default("config")
    .description("转发规则的存储方式。"),
});

const msgMap = new Map();
export function apply(ctx: Context, config: Config) {
  const rules = config["0"].rules;
  for (let item of rules) {
    msgMap.set(item[0], item[1]);
  }

  ctx.on("message", (session) => {
    let content: string = session.content;
    // console.log("session", session);
    if (
      !session.event.channel.type ||
      (session.event.channel && session.event.channel.type === 1)
    ) {
      // type===1 私聊消息
      Array.from(msgMap.keys()).forEach((key) => {
        if (content.startsWith(`${key}`)) {
          // 符合私发格式
          content = content.replace(`${key}`, "");
          // 转发消息
          console.log(
            `${new Date().toLocaleString()}`,
            "gid:",
            msgMap.get(key)
          );
          session.bot.sendMessage(
            msgMap.get(key),
            `聆听到[${getRandomName()}]的祷告了哦～🌸\n---\n${content}`,
            `${session.event.user.id}${new Date().toISOString()}`
          );
        }
      });

    }
  });
}
