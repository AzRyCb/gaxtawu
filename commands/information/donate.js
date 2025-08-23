module.exports = {
    name: "donate",
    aliases: ["donasi", "support"],
    category: "information",
    code: async (ctx) => {
        try {
            const qrisLink = await db.get("bot.text.qris") || null;
            const customText = await db.get("bot.text.donate") || null;
            const text = customText ?
                customText
                .replace(/%tag%/g, `@${ctx.getId(ctx.sender.jid)}`)
                .replace(/%name%/g, config.bot.name)
                .replace(/%prefix%/g, ctx.used.prefix)
                .replace(/%command%/g, ctx.used.command)
                .replace(/%footer%/g, config.msg.footer)
                .replace(/%readmore%/g, config.msg.readmore) :
                `${formatter.quote("083879175089 (gopay)")}\n` +
                formatter.quote("https://s.id/Unity_Central (Trakteer)");

            if (qrisLink) {
                return await ctx.reply({
                    image: {
                        url: qrisLink
                    },
                    mimetype: tools.mime.lookup("jpg"),
                    caption: text,
                    mentions: [ctx.sender.jid],
                    footer: config.msg.footer
                });
            } else {
                return await ctx.reply({
                    text: text,
                    mentions: [ctx.sender.jid],
                    footer: config.msg.footer
                });
            }
        } catch (error) {
            return await tools.cmd.handleError(ctx, error);
        }
    }
};
