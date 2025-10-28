// talentlink-main/app/api/metrics/route.ts
import { NextResponse } from "next/server";
import client from "prom-client";

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpReqCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP requests",
  labelNames: ["route", "method", "code"],
});
register.registerMetric(httpReqCounter);

export async function GET() {
  // We can’t see actual route here; still expose something for demo
  httpReqCounter.inc({ route: "/api/metrics", method: "GET", code: 200 });
  return new NextResponse(await register.metrics(), {
    status: 200,
    headers: { "Content-Type": register.contentType },
  });
}
