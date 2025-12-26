import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddExpenses from "./AddExpenses";

function StatCard({ title, value, progress }: any) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold mb-2">{value}</div>
      </CardContent>
    </Card>
  );
}

const Dashboard = () => {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Total monthly budget"
          value="$256,700.80"
          progress={60}
        />
        <StatCard
          title="Total expense value"
          value="$56,700.60"
          progress={35}
        />
        <StatCard
          title="Today’s receipt value"
          value="$26,800.20"
          progress={20}
        />
      </div>
      <div className="fixed md:right-6 md:bottom-6 right-4 bottom-16 z-50 group">
        <AddExpenses />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Expense Report</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Bar chart (Recharts)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expenses by categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Donut chart
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
